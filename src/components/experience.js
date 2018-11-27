import React from 'react';
import injectSheet from 'react-jss';
import {ExperienceText} from '../constants/texts';

const styles = (theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    color: theme.textLight,
    fontFamily: theme.contentFontFamily,
  },
  title: {
    width: '98%',
    paddingLeft: '0.5em',
    textAlign: 'start',
    fontFamily: theme.titleFontFamily,
    fontWeight: '100',
    lineHeight: '85%',
    color: theme.colorPrimaryLight,
    borderBottom: `0.06em solid ${theme.colorPrimaryLight}`,
    borderRadius: '10%',
    borderBottomRightRadius: '5%',
    boxShadow: theme.outBorderShadow,
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
    borderBottom: `0.05em solid ${theme.textLight}`,
    borderBottomRightRadius: '1%',
    borderBottomLeftRadius: '1%',
    boxShadow: theme.outBorderShadow,
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
    fontFamily: theme.titleFontFamily,
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
  educationContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const UnstyledExperienceSection = (props) => {
  const {section, classes} = props;
  return (
    <div className={classes.sectionContainer}>
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
};
const ExperienceSection = injectSheet(styles)(UnstyledExperienceSection);

const UnstyledExperience = (props) => {
    const {classes} = props;
    return (
      <div className={classes.container}>
        <h1 className={classes.title}>{ExperienceText.Title}</h1>
        <div className={classes.content}>
        {
          ExperienceText.Sections.map((section,index) => {
            return <ExperienceSection section={section} key={index} />
          })
        }
      </div>
    </div>
  );
};

export const Experience = injectSheet(styles)(UnstyledExperience);