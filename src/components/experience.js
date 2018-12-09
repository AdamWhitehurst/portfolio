import React from 'react';
import injectSheet from 'react-jss';

const styles = (theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    color: theme.textLight,
    fontFamily: theme.contentFontFamily,
  },
  title: {
    width: '95%',
    paddingLeft: '0.5em',
    paddingRight: '1em',
    textAlign: props => {
      return props.right ? 'end': 'start';
    },
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
  separator: {
    width: '100%',
    marginBottom: '1.2rem',
    borderBottom: `0.05em solid ${theme.textLight}`,
    borderBottomRightRadius: '1%',
    borderBottomLeftRadius: '1%',
    boxShadow: theme.outBorderShadow,
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
    { section.Tags && (
      <div className={classes.sectionTags}>
        Tags: {section.Tags}
      </div>
    )}
  </div> 
  );
};
const ExperienceSection = injectSheet(styles)(UnstyledExperienceSection);

const UnstyledExperience = (props) => {
    const {experience, classes} = props;
    return (
      <div className={classes.container}>
        <h1 className={classes.title}>{experience.Title}</h1>
        <div className={classes.content}>
        {
          experience.Sections.map((section,index) => {
            return (
              <div key={index}>
              {(index > 0) ? <hr className={classes.separator}/> : ''}
              <ExperienceSection section={section} />
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export const Experience = injectSheet(styles)(UnstyledExperience);