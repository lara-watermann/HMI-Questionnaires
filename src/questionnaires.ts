import { Questionnaire } from './types/Questionnaire';

const questionnaires: Questionnaire[] = [
  {
    name: 'System Usability Scale',
    short: 'SUS',
    metadata: {
      language: ['EN', 'DE'],
      scales: ['Usability'],
      time: ['Post-Study'],
      year: 1996,
      items: 10,
    },
    links: {
      website: "https://www.researchgate.net/publication/228593520_SUS_A_quick_and_dirty_usability_scale"
    }

  },
  {
    name: 'User Experience Questionnaire',
    short: 'UEQ',
    metadata: {
      scales: ['Attractiveness', 'Perspicuity', 'Efficiency', 'Dependability', 'Stimulation', 'Novelty', 'Hedonic', 'Pragmatic'],
      time: ['Post-Study'],
      items: 26,
      scaleType: 'Likert-7',
      year: 2005,
      language: ['DE', 'US', 'ES', 'PT', 'TR', 'ID', 'ZH', 'FR', 'IT', 'JA', 'NL', 'RU', 'EE', 'SI', 'SV', 'PL', 'EL', 'HI', 'FA', 'BG', 'CS', 'MS', 'TH', 'DA', 'BN', 'HE', 'KN', 'MR', 'TA', 'AR', 'BS', 'HR', 'FI', 'HU', 'NO', 'SK', 'KO']

    },
    links: {
      website: "https://www.ueq-online.org",
      doi: "http://dx.doi.org/10.1007/978-3-540-89350-9_6"
    },
  },
  {
    name: 'User Experience Questionnaire - Short',
    short: 'UEQ-S',
    metadata: {
      scales: ['Hedonic', 'Pragmatic'],
      time: ['Post-Study'],
      items: 8,
      scaleType: 'Likert-7',
      year: 2017,
      language: ['DE', 'US', 'ES', 'PT', 'TR', 'ID', 'ZH', 'FR', 'IT', 'JA', 'NL', 'RU', 'EE', 'SI', 'SV', 'PL', 'EL', 'HI', 'FA', 'BG', 'CS', 'MS', 'TH', 'DA', 'BN', 'HE', 'KN', 'MR', 'TA', 'AR', 'BS', 'HR', 'FI', 'HU', 'NO', 'SK', 'KO']

    },
    links: {
      website: "https://www.ueq-online.org",
      doi: "http://dx.doi.org/10.9781/ijimai.2017.09.001"
    },
  },
  {
    name: 'System Acceptance Scale',
    short: 'ACCEPTANCE SCALE',
    metadata: {
      scales: ['Acceptance'],
      time: ['Post-Study'],
      language: ['EN', 'DE', "NL", "SV", "ES", "FR", "IT", "JA"],
      year: 1997,
      items: 9
    },
    links: {
      doi: "https://doi.org/10.1016/s0968-090x(96)00025-3",
      website: "https://www.hfes-europe.org/accept/accept.html"
    },
  },
  {
    name: 'Negative Attitude toward Robots Scale',
    short: 'NARS',
    metadata: {
      // The scales are usually negative for this questionnaire, but for
      // filtering, we invert them for better visibility.
      scales: ['Comfort', 'Trust', 'Acceptance'],
      time: ['Post-Study'],
      items: 14,
      language: ['EN', 'ES', 'DE', 'FR', 'JA', 'CN'],
      year: 2006,
      scaleType: 'Likert-5'
    },
    links: {
      doi: "https://psycnet.apa.org/doi/10.1037/t57930-000",
      website: "https://www.bartneck.de/2019/03/11/negative-attitudes-towards-robots-scale-nars-translations/"
    },
  },
  {
    name: 'Attitudes toward Cooperative Industrial Robots Questionnaire',
    short: 'ACIR-Q',
    metadata: {
      scales: ['Social', 'Task', 'Affect'],
      time: ['Pre-Study', 'Standalone'],
      language: ['DE', 'EN'],
      items: 12,
      year: 2022
    },
    links: {
      doi: "https://doi.org/10.1007/s12369-023-00996-0",
      osf: "https://osf.io/5fnr9/"
    },
    domain: ['Robot']
  },
  {
    name: 'Trust in Automation Questionnaire',
    short: 'TiA',
    metadata: {
      scales: ['Intent of Developers', 'Reliability', 'Predictability', 'Familiarity', 'Propensity to Trust', 'Trust in Automation'],
      time: ['Post-Study'],
      language: ['EN', 'DE'],
      items: 19,
      year: 2019
    },
    links: {
      doi: "https://doi.org/10.1016/j.apergo.2017.07.006",
      git: "https://github.com/moritzkoerber/TiA_Trust_in_Automation_Questionnaire"
    },
  },
  {
    name: 'Usability Metric for User Experience',
    short: 'UMUX',
    metadata: {
      scales: ['Effectiveness', 'Efficiency', 'Satisfaction'],
      time: ['Post-Study'],
      items: 4,
      year: 2010
    },
    links: {
      doi: "https://doi.org/10.1016/j.intcom.2010.04.004",
    },
  },
  {
    name: 'Post-Study-Scenario Questionnaire',
    short: 'ASQ',
    metadata: {
      scales: ['Attractiveness', 'Efficiency', 'Perspicuity'],
      time: ['Post-Study'],
      year: 1991,
      language: ['EN'],
      items: 3,
      scaleType: 'Likert-7'
    },
    links: {
      doi: 'https://doi.org/10.1145/122672.122692',
    },
  },
  {
    name: 'NASA Task Load Index',
    short: 'NASA-TLX',
    metadata: {
      scales: ['Cognitive Load'],
      time: ['Post-Study'],
      year: 1988,
      language: ['EN'],
      items: 6
    },
    links: {
      doi: "https://doi.org/10.1016/s0166-4115(08)62386-9",
      website: "https://humansystems.arc.nasa.gov/groups/tlx/tlxpaperpencil.php"
    },
  },
  {
    name: 'AttrakDiff: Ein Fragebogen zur Messung wahrgenommener hedonischer und pragmatischer Qualität',
    short: 'AttrakDiff',
    metadata: {
      scales: ['Hedonic', 'Pragmatic'],
      time: ['Post-Study'],
      language: ['DE'],
      year: 2003,
    },
    links: {
      doi: 'https://doi.org/10.1007/978-3-322-80058-9_19'
    },
  },
  {
    name: 'Psychological assessment of AI-based decision support systems',
    short: 'PAAI',
    metadata: {
      scales: ['System Characteristics', 'Task Characteristics', 'Job Characteristics'],
      time: ['Standalone'],
      language: ['EN'],
      year: 2023,
    },
    links: {
      doi: 'https://doi.org/10.3389/frai.2023.1249322'
    },
  },
];

export default questionnaires;
