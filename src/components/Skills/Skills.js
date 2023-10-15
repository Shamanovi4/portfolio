import React from 'react'
import { Section } from '../../hoc/Section/Section'
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaGit,
  FaGulp,
  FaFigma,
  FaAngular,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiWebpack,
  SiAdobephotoshop,
  SiTypescript,
  SiNestjs,
  SiPostgresql,
} from 'react-icons/si'
import classes from './Skills.module.scss'
import { Tag } from '../UI/Tag/Tag'

export const Skills = () => {
  const primarySkillsList = [
    {
      icon: <FaHtml5 />,
      name: 'HTML',
      details: 'HTML5, Pug, BEM',
      color: '#e34f26',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS',
      details: 'CSS3, Responsive, SASS, SCSS',
      color: '#2965f1',
    },
    {
      icon: <SiJavascript />,
      name: 'JavaScript',
      details: 'ES9, Redux, Axios, JQuery',
      color: '#f7df1e',
    },
    {
      icon: <FaReact />,
      name: 'React',
      details: 'Hooks, Router, Redux',
      color: '#61dafb',
    },
    {
      icon: <SiTypescript />,
      name: 'Typescript',
      details: '',
      color: '#3178c6',
    },
    { icon: <FaAngular />, name: 'Angular 14', details: '', color: '#dd0031' },
    { icon: <SiNestjs />, name: 'NestJS', details: '', color: '#e0234e' },
    {
      icon: <SiPostgresql />,
      name: 'PostgreSQL',
      details: '',
      color: '#336791',
    },
  ]
  const secondarySkillsList = [
    { icon: <FaGit />, name: 'Git', color: '#f54d27' },
    { icon: <FaGulp />, name: 'Gulp', color: '#cf4647' },
    { icon: <SiWebpack />, name: 'Webpack', color: '#1c78c0' },
    { icon: <FaFigma />, name: 'Figma', color: '#c7b9ff' },
    { icon: <SiAdobephotoshop />, name: 'Photoshop', color: '#31a8ff' },
  ]

  function renderSkillsList(list) {
    return list.map((item, index) => {
      return (
        <li className={classes.skillsListItem} key={index}>
          <i
            className={classes.skillsListItemIcon}
            style={{ color: item.color }}
          >
            {item.icon}
          </i>
          <h2 className={classes.skillsListItemName}>{item.name}</h2>
          <p className={classes.skillsListItemDetails}>{item.details}</p>
        </li>
      )
    })
  }

  return (
    <Section>
      <div className={classes.skills}>
        <Tag>PrimarySkills</Tag>
        <ul className={classes.skillsList}>
          {renderSkillsList(primarySkillsList)}
        </ul>
        <Tag>SecondarySkills</Tag>
        <ul className={classes.skillsList}>
          {renderSkillsList(secondarySkillsList)}
        </ul>
      </div>
    </Section>
  )
}
