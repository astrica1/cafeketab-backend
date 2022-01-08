// const validateParams = (requestParams) => {
//     return (req, res, next) = {
//         for (let param of requestParams) {
//             if (checkParamPresent(Object.keys(req.body), param)) {
//                 let reqParam = req.body[param.param_key];
//                 if (!checkParamType(reqParam, param)) {
//                     return res.send(400, {
//                         status: 400,
//                         result: `${param.param_key} is of type ` +
//                             `${typeof reqParam} but should be ${param.type}`
//                     });
//                 } else {
//                     if (!runValidators(reqParam, param)) {
//                         return res.send(400, {
//                             status: 400,
//                             result: `Validation failed for ${param.param_key}`
//                         });
//                     }
//                 }
//             } else if (param.required) {
//                 return res.send(400, {
//                     status: 400,
//                     result: `Missing Parameter ${param.param_key}`
//                 });
//             }
//         }
//         next();
//     }
// };

// const checkParamPresent = (reqParam, paramObj) => {
//     return (reqParams.includes(paramObj.param_key));
// };

// const checkParamType = (reqParam, paramObj) => {
//     const reqParamType = typeof reqParam;
//     return reqParamType === paramObj.type;
// };

// const runValidators = (reqParam, paramObj) => {
//     for (let validator of paramObj.validator_functions) {
//         if (!validator(reqParam)) {
//             return false
//         }
//     }
//     return true;
// };

// module.exports = {
//     validateParams: validateParams
// };