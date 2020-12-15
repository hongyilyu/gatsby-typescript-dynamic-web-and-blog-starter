import React from 'react';

import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
//@ts-ignore
import VerticalTicketRip from '@mui-treasury/components/rip/verticalTicket';
//@ts-ignore
import { useVerticalRipStyles } from '@mui-treasury/styles/rip/vertical';
import { Link } from '@reach/router';
import { USER_IMG_URL } from '../../utils/url.utils';
import HighlightedText from './highlighted-text.component';

const mainColor = '#003399';
const lightColor = '#ecf2ff';
const borderRadius = 12;

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  card: {
    overflow: 'visible',
    background: 'none',
    display: 'flex',
    width: 456,
    minHeight: 150,
    filter: 'drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3))',
    '& $moveLeft, $moveRight': {
      transition: '0.3s',
    },
    '&:hover': {
      '& $moveLeft': {
        transform: 'translateX(-8px)',
      },
      '& $moveRight': {
        transform: 'translateX(8px)',
      },
    },
    [breakpoints.up('sm')]: {
      minWidth: 400,
    },
  },
  left: {
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    flexBasis: '33.33%',
    display: 'flex',
    backgroundColor: '#fff',
  },
  media: {
    margin: 'auto',
    width: 80,
    height: 80,
    borderRadius: '50%',
  },
  right: {
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    flex: 1,
    padding: 12,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: lightColor,
  },
  label: {
    padding: '0 8px',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 0,
    marginBottom: 4,
  },
  subheader: {
    fontSize: 12,
    margin: 0,
    color: palette.text.secondary,
  },
  moveLeft: {},
  moveRight: {},
}));

const ResultInfo = React.memo(function PlaneTicketCard({ result }: any) {
  const styles = useStyles();
  const ripStyles = useVerticalRipStyles({
    size: 24,
    rightColor: lightColor,
    tearColor: mainColor,
  });
  return (
    <Card className={styles.card} elevation={0}>
      <div className={cx(styles.left, styles.moveLeft)}>
        <CardMedia
          className={styles.media}
          image={USER_IMG_URL(result.author)}
        />
      </div>
      <VerticalTicketRip
        classes={{
          ...ripStyles,
          left: cx(ripStyles.left, styles.moveLeft),
          right: cx(ripStyles.right, styles.moveRight),
        }}
      />
      <div className={cx(styles.right, styles.moveRight)}>
        <div className={styles.label}>
          <HighlightedText
            style={{
              font: 'inherit',
              fontWeight: 'bold',
            }}
            content={result.title}
            positions={result.titlePos}
            maxLength={50}
          />
          <HighlightedText
            className={styles.subheader}
            content={result.content}
            positions={result.bodyPos}
            isMarkdown={false}
            maxLength={50}
          />
        </div>
      </div>
    </Card>
  );
});

const SearchDropdownItem: React.FC<{ result: any }> = ({ result }) => {
  return (
    <Link
      to={result.url}
      style={{
        textDecoration: 'none',
        display: 'inline-block',
        margin: '2px 0',
      }}
    >
      <ResultInfo result={result} />
    </Link>
  );
};

export default SearchDropdownItem;
