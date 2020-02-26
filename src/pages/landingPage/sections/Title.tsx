import React from 'react';
import { Link } from 'react-scroll';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { AppLinks } from '../../../database/links';
import { TableOfContents } from '../../../database/tableOfContents';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../../../styles/animation.scss';
import { customMedia } from '../../../styles/globalStyle';
import { theme } from '../../../styles/theme';
import LockdropPanel from '../../../components/LockdropPanel';
import { LockdropEnd, LockdropStart } from '../../../database/tokenInfo';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// const useStyles = makeStyles(theme => ({
//   heroContent: {
//       padding: theme.spacing(8, 0, 6),
//   },
//   heroButtons: {
//       marginTop: theme.spacing(4),
//   },
//   btnPrimary: {
//       background: 'linear-gradient(45deg, #1d417f 30%, #2e8ec0 90%)',
//       border: 0,
//       borderRadius: 3,
//       boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
//       color: 'white',
//       height: 48,
//       padding: '0 30px',
//       margin: theme.spacing(4, 0, 0),
//   },
//   panel: {
//       padding: theme.spacing(8, 0, 6),
//   },
// }));

const Title: React.FC<Props> = () => {
    // const classes = useStyles();

    return (
        <TitleContainer id="ui-id">
            <div className="title">
                <Typography
                    className="SlideDown one"
                    component="h1"
                    variant="h2"
                    align="center"
                    color="primary"
                    gutterBottom
                >
                    Plasm Network is
                    <br /> a scaling Dapps platform on Substrate
                </Typography>
            </div>
            <div className="container">
                <div className="left">
                    {TableOfContents.map(content => (
                        <div className="btn-row Fade-in one" key={content.id}>
                            <Link className="link" to={content.link} smooth={true} offset={0} duration={900}>
                                {content.content}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="right">
                    <div className="ui SlideUp one">
                        {/* Memo: Format must "yyyy-dd-dd hh:mm:ss" */}
                        {/* Memo: Cannot work on mobile device if props as "2021-1-1 00:00:00". Date format must dd:dd  */}
                        {/* Time standard: UTC  */}
                        {/* <LockdropInfo countdownDate="2020-03-15 00:00:00" /> */}
                        <LockdropPanel endTime={LockdropEnd} startTime={LockdropStart} />
                        <div className="app-buttons SlideUp two">
                            <div>
                                <a href={AppLinks.plasmnetIo} rel="noopener noreferrer" target="_blank">
                                    <Button color="violet" size="massive" className="ui-button">
                                        Launch UI
                                    </Button>
                                </a>
                            </div>
                            <div>
                                <a href={AppLinks.joinLockdrop} rel="noopener noreferrer" target="_blank">
                                    <Button size="massive" className="ui-button" inverted color="violet">
                                        Join Lockdrop
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TitleContainer>
    );
};

export default Title;

const TitleContainer = styled.div`
  width: 100vw;
  background: black;

  display: grid;
  grid-template-rows: 30% 70%;
  align-items: center;
  ${customMedia.greaterThan('tabletPro')`
    padding-top: 0px;
  `}
  ${customMedia.lessThan('laptopSmall')`
    padding-top: -10px;
    height: 1200px;
  `}

  /* Memo: If a user make browser as lower size */
  /* Assign 'min-height' to avoid collapse the title section */
  @media only screen and (min-width: 1032px) and (min-height: 710px){
    padding-top: 60px;
    height: 100vh;
  }
  @media only screen and (min-width: 1032px) and (max-height: 710px){
    padding-bottom: 60px;
  }

  .link{
    color:rgb(129, 133, 141);
  }
  .title{
    margin-top: 10px;
  }

  .container{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 24px;
    ${customMedia.lessThan('laptop')`
      justify-content: space-around;
      padding: 10px;
    `}
    ${customMedia.lessThan('laptopSmall')`
      flex-direction: column-reverse;
    `}
    ${customMedia.lessThan('mobile')`
      width: 100%;
      margin: 0;
      padding: 0;
    `}
    @media only screen and (max-height: 708px){
    margin-top: 30px;
    margin-bottom: 30px;
  }
    .left{
      ${customMedia.lessThan('laptopSmall')`
          margin-top: 60px;
        `}
      .btn-row {
        color: ${theme.colors.white};
        height: 42px;
        cursor: pointer;
        line-height: 40px;
        font-size: 18px;
        position: relative;
        ${customMedia.lessThan('laptop')`
            padding-left: 50px;
          `}

        /* --- */
        &:before {
          position: absolute;
          content: "";
          width: 36px;
          height: 1px;
          background: #323232;
          top: 50%;
          left: -58px;
          ${customMedia.lessThan('laptop')`
            left: 0px;
          `}
        }
      }
    }
  }

  .right{
    ${customMedia.lessThan('mobile')`
       width: 100%;
    `}

    .ui {
      display: grid;
      align-items: center;
      grid-row-gap: 30px;
      ${customMedia.lessThan('tabletPro')`
      `}
      ${customMedia.lessThan('mobile')`
        grid-row-gap: 28px;
      `}

      .lockdrop{
        ${customMedia.lessThan('mobile')`
          display: grid;
          justify-items: center;
        `}
      }
      .app-buttons {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 40px;
        justify-items: center;
        ${customMedia.lessThan('laptopSmall')`
          margin-top: 40px;
        `}
        ${customMedia.lessThan('mobile')`
        /* grid-template-rows: 1fr 1fr; */
        grid-template: none;
      `}
      }
      .ui-button {
        margin-top: 0px;
        width: 270px;
        font-family: ${theme.font};

        ${customMedia.lessThan('tabletPro')`
          align-items: start;
        `}
        ${customMedia.lessThan('mobile')`
          width: 330px;
        `}
      }
    }
  }
`;