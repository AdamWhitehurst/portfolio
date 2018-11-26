import React from 'react'
import { ExperienceText } from '../constants/texts';
import injectSheet from 'react-jss';

const style = (Theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    color: Theme.textLight,
    fontFamily: Theme.contentFontFamily,
  },
  title: {
    width: '98%',
    paddingRight: '1em',
    textAlign: 'end',
    fontFamily: Theme.titleFontFamily,
    fontWeight: '100',
    lineHeight: '85%',
    borderBottom: `0.06em solid ${Theme.textLight}`,
    borderRadius: '25%',
    borderBottomRightRadius: '8%',
    boxShadow: Theme.outBorderShadow,
  },
  content: {
    padding: '1em',
  },
  sectionContainer: {
    marginBottom: '1rem',
    paddingBottom: '0.25rem',
    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottom: `0.05em solid ${Theme.textLight}`,
    borderBottomRightRadius: '1%',
    borderBottomLeftRadius: '1%',
    boxShadow: Theme.outBorderShadow,
  },
  sectionLeftTitle: {
    margin: 0,
    fontSize: '0.8em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  sectionTitle: {
    margin: 0,
    fontFamily: Theme.titleFontFamily,
    fontSize: '1.2em',
    fontWeight: '100',
    fontStyle: 'normal',
  },
  sectionSubtitle: {
    fontSize: '0.8em',
    fontWeight: '100',

  },
  sectionDate: {
    fontSize: '0.8em',
    fontStyle: 'italic',
  },
  sectionBody: {
    width: '100%',
    fontSize: '0.9em',
    padding: '1em',
  },
  sectionTags: {
    fontSize: '0.6em',
  },
});

class UnstyledExperience extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <h1 className={classes.title}>{ExperienceText.Title}</h1>
        <div className={classes.content}>
          {this.renderSections()}
        </div>
      </div>
    )
  }

  renderSections() {
    const {classes} = this.props;
    let sections = [];
    for (let section of ExperienceText.Sections) {

      sections.push (
        <div key={ExperienceText.Sections.indexOf(section)} className={classes.sectionContainer}>
          <div className={classes.sectionLeftTitle}>
            <div className={classes.sectionSubtitle}>{section.Subtitle}</div>
            <div className={classes.sectionDate}>{section.Date}</div>
          </div>
          <h2 className={classes.sectionTitle}>{section.Title}</h2>
          <div className={classes.sectionBody}>
            {
              section.Body.map((text, i) => {
                  return <li key={i}>{text}</li>;
              })
            }
          </div>
          <div className={classes.sectionTags}>
            Tags: {section.Tags}
          </div>
        </div>
      );

    }
    return sections;
  }
};

export const Experience = injectSheet(style)(UnstyledExperience);