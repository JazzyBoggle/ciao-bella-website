import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, state, source, q1, q2, q3 } = body;

    if (!firstName || !email) {
      return NextResponse.json({ error: 'First name and email are required' }, { status: 400 });
    }

    const apiKey = process.env.KLAVIYO_API_KEY;
    const listId = process.env.KLAVIYO_LIST_ID;

    if (!apiKey || !listId) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Create/update profile in Klaviyo
    const profileRes = await fetch('https://a.klaviyo.com/api/profiles/', {
      method: 'POST',
      headers: {
        'Authorization': `Klaviyo-API-Key ${apiKey}`,
        'Content-Type': 'application/json',
        'revision': '2024-02-15',
      },
      body: JSON.stringify({
        data: {
          type: 'profile',
          attributes: {
            email,
            first_name: firstName,
            last_name: lastName || '',
            phone_number: phone || '',
            properties: {
              state: state || '',
              source: source || '',
              waitlist_q1: q1 || '',
              waitlist_q2: q2 || '',
              waitlist_q3: q3 || '',
              waitlist_signup_date: new Date().toISOString(),
            },
          },
        },
      }),
    });
let profileId: string = '';

    if (profileRes.status === 201) {
      const profileData = await profileRes.json();
      profileId = profileData.data.id;
    } else if (profileRes.status === 409) {
      // Profile already exists — get the ID from the conflict response
      const profileData = await profileRes.json();
      profileId = profileData.errors?.[0]?.meta?.duplicate_profile_id;
    } else {
      const err = await profileRes.json();
      console.error('Klaviyo profile error:', err);
      return NextResponse.json({ error: 'Failed to create profile' }, { status: 500 });
    }

    // Add profile to waitlist
    await fetch(`https://a.klaviyo.com/api/lists/${listId}/relationships/profiles/`, {
      method: 'POST',
      headers: {
        'Authorization': `Klaviyo-API-Key ${apiKey}`,
        'Content-Type': 'application/json',
        'revision': '2024-02-15',
      },
      body: JSON.stringify({
        data: [{ type: 'profile', id: profileId }],
      }),
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('Waitlist error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
