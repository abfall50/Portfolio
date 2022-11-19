// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import pageInfoEn from './pageInfo_en'
import projectEn from './project_en'
import skill from './skill'
import social from './social'
import pageInfoFr from './pageInfo_fr'
import projectFr from './project_fr'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    pageInfoEn,
    projectEn,
    skill,
    social,
    pageInfoFr,
    projectFr,
  ]),
})
