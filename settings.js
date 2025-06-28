/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VUS2/qRhj9K9VsIddPsEGKdG3zNnAxmIep7mJsj2HwE48fmIhdd5WqqFK7qaKuqm6qXqnLKv8p+QmVIVGy6E1Tr0Yz4/Od+c453w0IQkyQigrQvAFRjDOYoHKZFBECTSCnjoNiUAU2TCBoAlYVBCs2kkPgxdl0vW9U9nRodhcsGc9X1Fj0IeceONbXFqNrcKqCKDU9bL0BmCFRw0InTMPINPftup2742O+oDazbd2vuCztKxSvDfSNkl+DU4kIcYyDTTvaIh/F0FNRMYE4fh993Mrz2Ggf9OPQZmUy2eCjr3L5MYOWMkUeO2X13dykdplnvY8+lZkqF4y2sberIY/utd0x65prZHCpVpOWBg0H3S2v7fLW6EKf4E2A7L6NggQnxbv73p3UGaOrkm7fG64LThe7QYYdT01xRZDnMxbKq1rYcGajOXkf8UJ3o0+aKjCpqY8XkPGGaVCxjojhROhqEPfUpb6tN9rmsf+a+CR+9or7f/q+kRq9uGFJLbddG3TXkZSxbrgY0fteISd5vQ5bDdZdLLgZ476Pfv3ITnv7QdaOha3YcrbTsZGbEVbQlN/rbH/D85Tlux2JkugX+jBJ47dYmqbfZdXcrJsbDs58VbEH093EMAcyv2Mshk3QBCk7YWSMTaFftI6TQ8ce23FkhuOeoGcpEXquT/WmKSnI+uh05lRnp2jX5xe5qOjboMmcqiBGG0ySGCY4DMo9lq0CaGczZMUoOXcXHGaSzLf0WPU7eGHyHXvecypG9zDdIyNT28MdVUMkJ8FEcq9BFURxaCFCkN3DJAnjYoQIgRtEQPPbz1UQoENy0a2sxjFV4OCYJPMgjbwQ2s+iPh9CywrTIJkVgaWUCxSDJv2yjZIEBxtStjENYGxtcYaULUwIaDrQI+hUBTbKsIVKPGCOpp3eMlxrbNcI00+4mI8P+01JeRsGlytcnaY5lkVXJlevX/GcIF41LNq+shFtcZZZd+piDVQBfopM+c9XFRSKY8cpDoe5U3SwLkvbQDC1/UDRK+JZhUvrUYxs0EziFFWBCS03jfTQRcEbuBycC+n8oHQD28Yo3flr03LHs8nYHL3CvUgKmjcvY0oJ7RKP79WXuryagCrwzw7E5ctrdIOrNXiBo4Wm+JF8yMs2wij6EKAEVIF3vsSIrCDW6jRPi5xYY5rix3K/CgJYIoHHu9ufH+9uf3i8u/3+8e72p8e72+8e725//Obh/o+H+y8P93893P/2cP/nw/3fD/dfHn/9/ZeS75OYJRMbJRB7BDSBouqj3c7SGjyS8twwpEKSVEkqDfYs/nOILi7l05W8nu27DSuiUrmSkf5kqclMDjWGo9WhNN52pmlNzzpB/m8goAlG3YweSlTizqLxcBFRa0gZYjc46EqlGGUjuGgomTdl3SG9VL3dMvdQjV0Q3MlaVmtub7XRiKw9yDS2XtvlfDQmSoOXpeuy2sWEr4tRJOSyCCoz+iBr9oRxnWXF6csraqBjoc7L00O2U8VPCSfvd8td0W4lvdQ3PJt0hv5xIHagTBkaQUNtRULXX0VGYpry5hLv83jxnsY6Pifv5smyDkbnKfkk2H+I/pId+lR9hfA0db/iTxkNvXw532+zleoIGycWlBbjSrbVdcd2Q8F5y5jOzXQuHNYiOJ0+V0HkwcQJYx80AQzsODx7Kg7TMtz9wAnfKKZI83776d0eJIn0MjB07COSQD8CTUaoMQzLNnjxcmsSh1EPki1ogsDnZLOMQiFF0SyByfP4AVL5tSoxOP0DCuCHvZkIAAA=';

const prefix = process.env.PREFIX || '🧛';

const author = process.env.OWNER_NAME || '𝐖𝐎𝐋𝐕𝐄𝐒 ＬＯＲＥＮＺＯ🧛';

const packname = process.env.PACKNAME || '𝐖𝐎𝐋𝐕𝐄𝐒 ＬＯＲＥＮＺＯ🧛';

const dev = process.env.OWNER_NUMBER || '50935947307';

const DevKeith = dev.split(",");

const antibot = process.env.ANTIBOT || 'true';

const botname = process.env.BOTNAME || 'KEITH-MD';

const mode = process.env.MODE || 'private';

const sessionName = "session";

const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';

const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';

const timezone = process.env.TIMEZONE || 'Africa/Nairobi';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  database,  
  botname, 
  mode,
  prefix,
  timezone,
  author,  
  url,
  gurl,
  antibot,
  packname,
  dev,
  DevKeith,  
  session,
};
