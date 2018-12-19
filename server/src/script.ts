import * as _ from 'lodash';
import fs from 'fs';
import * as AWS from 'aws-sdk';

AWS.config.update({region: 'us-east-2'});
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});


const delay = (t: number) => new Promise(resolve => setTimeout(resolve, t))

const spells = JSON.parse(fs.readFileSync('spells.json', 'utf8')).Spells;
(async () => {
    for (const spell in spells) {
        // Pull in the aws sdk and hit your dynamo table with each entry.
        await ddb.batchWriteItem(spell, (err, spell) => {

        });
        await delay(1000);
    }
})();