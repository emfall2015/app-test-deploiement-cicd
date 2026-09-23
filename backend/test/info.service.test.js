const test = require('node:test');
const assert = require('node:assert/strict');
const { getTrainingInfo } = require('../src/services/info.service');

test('getTrainingInfo retourne les informations attendues', () => {
  const result = getTrainingInfo();

  assert.deepEqual(result, {
    course: 'Déploiement & CI/CD',
    message: 'Le backend répond correctement.',
    version: '0.1.0'
  });
});
