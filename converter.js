const convert = require('@openapi-contrib/json-schema-to-openapi-schema');

const schema = {
  '$schema': 'datacenter.swagger.json',
  type: ['string', 'null'],
  format: 'date-time',
  cloneSchema: false
};

(async () => {
  const convertedSchema = await convert(schema);
  console.log(convertedSchema);
})();