'use strict';

/**
 * sample-content service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sample-content.sample-content');
