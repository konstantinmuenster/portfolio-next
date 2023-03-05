export const ProfileContent = ({
  font,
  accentFont,
}: {
  font?: string;
  accentFont?: string;
}) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        padding: '64px',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', marginTop: '80px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://konstantin.digital/images/avatar.jpg"
            width={180}
            height={180}
            alt="profile"
            style={{
              borderRadius: '9999px',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '48px',
            }}
          >
            <span
              style={{
                fontSize: '70px',
                color: '#F2F2EE',
                fontFamily: accentFont,
                paddingTop: '8px',
              }}
            >
              konstantin münster
            </span>
            <span
              style={{
                fontSize: '28px',
                color: '#EAEAEA',
                fontFamily: font,
              }}
            >
              Web & Product Developer
            </span>
          </div>
        </div>
        <span
          style={{
            fontSize: '18px',
            color: '#EAEAEA',
            fontFamily: font,
          }}
        >
          konstantin.digital
        </span>
      </div>
    </div>
  );
};
