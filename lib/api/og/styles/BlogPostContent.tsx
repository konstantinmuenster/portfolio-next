export const BlogPostContent = ({
  font,
  accentFont,
  category,
  title,
}: {
  font?: string;
  accentFont?: string;
  category?: string | null;
  title?: string | null;
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
        style={{ display: 'flex', flexDirection: 'column', maxWidth: '720px' }}
      >
        <div style={{ display: 'flex' }}>
          {category ? (
            <span
              style={{
                fontFamily: font,
                fontSize: '16px',
                color: '#1C0C5E',
                padding: '12px 16px',
                borderRadius: '4px',
                background: '#F2F2EE',
              }}
            >
              {category}
            </span>
          ) : null}
        </div>
        {title ? (
          <span
            style={{
              fontFamily: accentFont,
              fontSize: '48px',
              lineHeight: '56px',
              color: '#F2F2EE',
              marginTop: '16px',
            }}
          >
            {title}
          </span>
        ) : null}
        <div style={{ display: 'flex', marginTop: '64px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://konstantin.digital/images/avatar.jpg"
            width={60}
            height={60}
            alt="profile"
            style={{
              borderRadius: '9999px',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '24px',
            }}
          >
            <span
              style={{
                fontSize: '16px',
                color: '#F2F2EE',
                fontFamily: font,
                paddingTop: '4px',
              }}
            >
              Written By
            </span>
            <span
              style={{
                fontSize: '22px',
                color: '#EAEAEA',
                fontFamily: font,
              }}
            >
              Konstantin Münster
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
