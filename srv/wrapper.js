const positionparent = require('position-process');
module.exports = cds.service.impl(async function (srv) {
    const outapiresponses = {
        response: []
    };
    srv.on('CREATE', 'funapis', async (req, res) => {
        const outapiresponses = {
            response: []
        };
        let inputJsonSrvData;
        try {
            inputJsonSrvData = JSON.parse(req.data.data);
        }
        catch (error) {
            req.error(500, 'Error parsing JSON');
        }
        if (req.data.servicetype == "Position-Process") {
            const positionprocessresp = await positionparent.super_positionprocessing(inputJsonSrvData)
            outapiresponses.response = positionprocessresp.response;
        }
        return outapiresponses;
    })
})