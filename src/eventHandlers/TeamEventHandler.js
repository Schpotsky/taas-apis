/*
 * Handle events for Team.
 */

const _ = require('lodash')
const config = require('config')
const logger = require('../common/logger')
const helper = require('../common/helper')

/**
 * Once we create a team, the notification emails to be sent out.
 *
 * @param {Object} payload the event payload
 * @returns {undefined}
 */
async function sendNotificationEmail (payload) {
  const template = helper.getEmailTemplatesForKey('notificationEmailTemplates')['taas.notification.team-created']
  const emailData = {
    serviceId: 'email',
    type: 'taas.notification.team-created',
    details: {
      from: template.from,
      recipients: _.map(payload.project.members, m => _.pick(m, 'email')),
      data: {
        subject: template.subject,
        teamName: payload.project.name,
        jobList: _.map(payload.jobs, j => _.pick(j, 'title', 'duration', 'startDate')),
        notificationType: {
          newTeamCreated: true
        },
        description: 'Send notification when a new Team was created using endpoint "POST /taas-teams/submitTeamRequest"'
      },
      sendgridTemplateId: template.sendgridTemplateId,
      version: 'v3'
    }
  }
  await helper.postEvent(config.NOTIFICATIONS_CREATE_TOPIC, {
    notifications: [emailData]
  })
  logger.debug({
    component: 'TeamEventHandler',
    context: 'sendNotificationEmail',
    message: `project id: ${payload.project.id} created with jobs: ${_.join(_.map(payload.jobs, 'id'), ',')}`
  })
}

/**
 * Process team creating event.
 *
 * @param {Object} payload the event payload
 * @returns {undefined}
 */
async function processCreate (payload) {
  await sendNotificationEmail(payload)
}

module.exports = {
  processCreate
}
