import { ImageResponse } from 'next/og';

// Route segment config
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // Icon design
      <div
        style={{
          background: 'linear-gradient(45deg, #2563eb 0%, #9333ea 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          AR
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}