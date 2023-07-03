const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const BaseServicePaginator = require("../../base/services/BaseServicePaginator");
const { GAJI_CONFIG_MAIN_TABLE } = require("../config");

const GajiServiceList = async (terms, page) => {
  const queryBuilder = BaseServiceQueryBuilder(GAJI_CONFIG_MAIN_TABLE);

  if (terms) {
    queryBuilder.whereILike("ID_Gaji", `%${terms}%`);
  }

  return {
    ...(await BaseServicePaginator(page, queryBuilder)),
    terms: terms ? terms : "",
  };
};

module.exports = GajiServiceList;
