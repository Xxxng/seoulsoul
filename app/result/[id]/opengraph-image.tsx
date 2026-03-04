import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Seoul Soul Match Result';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const RESULTS: Record<string, { title: string; vibe: string; color: string }> = {
  Seongsu: { title: "Seongsu-dong", vibe: "The Brooklyn of Seoul", color: "#f87171" },
  Hannam: { title: "Hannam-dong", vibe: "The Global Village", color: "#60a5fa" },
  Hongdae: { title: "Hongdae", vibe: "The Indie Heartbeat", color: "#facc15" },
  Euljiro: { title: "Euljiro", vibe: "The Hipjiro Legend", color: "#4ade80" },
  Gangnam: { title: "Gangnam", vibe: "The Modern Metropolis", color: "#c084fc" }
};

export default async function Image({ params }: { params: { id: string } }) {
  const { id } = params;
  const result = RESULTS[id] || RESULTS.Seongsu;

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
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            background: 'white',
            border: '10px solid black',
            padding: '60px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '30px 30px 0px 0px rgba(0,0,0,1)',
            width: '1000px',
            position: 'relative',
          }}
        >
          {/* Decorative Sparkle Placeholder */}
          <div style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '60px' }}>✨</div>
          
          <p style={{ fontSize: '30px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '2px', color: '#666' }}>
            Your Seoul Soul Match:
          </p>
          
          <h1 style={{ 
            fontSize: '110px', 
            fontWeight: '900', 
            margin: '0 0 20px 0', 
            lineHeight: '1',
            textTransform: 'uppercase',
            display: 'flex'
          }}>
            {result.title}
          </h1>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            borderTop: '6px solid black',
            paddingTop: '20px'
          }}>
             <span style={{ fontSize: '50px', fontWeight: 'bold', fontStyle: 'italic' }}>
              📍 {result.vibe}
            </span>
          </div>
          
          <div style={{ 
            marginTop: '40px', 
            background: 'black', 
            color: 'white', 
            padding: '12px 24px', 
            fontSize: '24px', 
            fontWeight: 'bold',
            alignSelf: 'flex-start'
          }}>
            #SeoulSoulMatch #DigitalNomad
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
