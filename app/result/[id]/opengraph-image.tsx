import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Seoul Soul Match Result';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const RESULTS = {
  Seongsu: { title: "Seongsu-dong", vibe: "The Brooklyn of Seoul", color: "#f87171" },
  Hannam: { title: "Hannam-dong", vibe: "The Global Village", color: "#60a5fa" },
  Hongdae: { title: "Hongdae", vibe: "The Indie Heartbeat", color: "#facc15" },
  Euljiro: { title: "Euljiro", vibe: "The Hipjiro Legend", color: "#4ade80" },
  Gangnam: { title: "Gangnam", vibe: "The Modern Metropolis", color: "#c084fc" }
};

export default async function Image({ params }: { params: { id: string } }) {
  const result = RESULTS[params.id as keyof typeof RESULTS] || RESULTS.Seongsu;

  return new ImageResponse(
    (
      <div
        style={{
          background: result.color,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            background: 'white',
            border: '8px solid black',
            padding: '60px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '20px 20px 0px 0px rgba(0,0,0,1)',
            width: '1000px',
          }}
        >
          <p style={{ fontSize: '32px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '4px' }}>
            YOUR SEOUL SOUL MATCH:
          </p>
          <h1 style={{ fontSize: '100px', fontWeight: '900', margin: '0 0 20px 0', borderBottom: '8px solid black', paddingBottom: '20px', textTransform: 'uppercase' }}>
            {result.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
             <p style={{ fontSize: '48px', fontWeight: '900', fontStyle: 'italic' }}>
              📍 {result.vibe}
            </p>
          </div>
          <div style={{ marginTop: '40px', background: 'black', color: 'white', padding: '15px 30px', alignSelf: 'flex-start', fontSize: '24px', fontWeight: 'bold' }}>
            #SeoulSoulMatch #DigitalNomad
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
