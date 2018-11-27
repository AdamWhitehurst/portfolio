import React from 'react';
import injectSheet from 'react-jss';
import {EducationText} from '../constants/texts';

const styles = (theme) => ({
  container: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'no-wrap',
    color: theme.textLight,
    fontFamily: theme.contentFontFamily,
  },
  title: {
    width: '94%',
    color: theme.colorPrimaryLight,
    paddingLeft: '0.25em',
    textAlign: 'start',
    fontSize: '1.9em',
    fontFamily: theme.titleFontFamily,
    fontWeight: '100',
    lineHeight: '85%',
    borderBottom: `0.06em solid ${theme.colorPrimaryLight}`,
    borderBottomRightRadius: '8%',
    boxShadow: theme.outBorderShadow,
  },
  content: {
    padding: '1em',
  },
  sectionContainer: {
    paddingLeft: '0.5rem',
    paddingTop: '0.2rem',
    paddingBottom: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    borderLeft: `0.06em solid ${theme.colorPrimaryLight}`,
  },
  sectionTitle: {
    margin: 0,
    fontSize: '0.9em',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  sectionSubtitle: {
    fontSize: '0.7em',
    fontWeight: '100',
    margin: 0,

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
  }
});

const UnstyledEducationSection = (props) => {
  const {section, classes} = props;
  return (
    <div className={classes.sectionContainer}>
      <h4 className={classes.sectionTitle}>{section.Title}</h4>
      <h5 className={classes.sectionSubtitle}>{section.Subtitle}</h5>
      <div className={classes.sectionDate}>{section.Date}</div>
    </div> 
  );
};

const EducationSection = injectSheet(styles)(UnstyledEducationSection);

const UnstyledEducation = (props) => {
  const {classes} = props;
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{EducationText.Title}</h2>
      {
        EducationText.Sections.map((section, index) => {
          return <EducationSection section={section} key={index} />
        })
      }
    </div>
  );
}

export const Education = injectSheet(styles)(UnstyledEducation);