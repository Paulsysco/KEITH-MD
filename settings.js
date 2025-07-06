/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VVyW7ryBX9laC2klsUKU4CDISDRFMUKWqgpiBoFMkiVeKoIqnpwbveNRAYAdKbhpFV0JtGGsgy8D/ZnxBQsvGMznsvDlcF1uW559577uEnkGa4QAY6ge4nkBO8hyWqj+UpR6AL5CoIEAFN4MMSgi7QB41UmTG+tFB3tr6fRpRjawdqwAvU2S/UzZmr0tWOvesssltw3wR55cbY+wYgjxeSpbeSPZ/Ndo1YiO+ic8wxbbQ+yYI/T2A53/VaRBan3i24rxEhJjgNe/kGJYjA2EAnG2LyMfrjPg55pzOb9u5yqcNHlJ/LY2vfmNH2OS8Hs+1gk/QDJAW98GP0NytXnOtJNBko0RrRZ0ZhjBEmW6d9EgfnI+3pRTyqtjQdO1f6BQ5T5Os+Sktcnj7c95HGmFmvYbTQUeeJ2tqtW9ShMzlONdv1Rjt5krSOZm4flWj8MeIzalk4osWPG7FttLSqGFJRwti9c9ZoqHSp8YocwTzU2I30nrhN3rQS/T999/SWVZ5ariwOWmLgbuc7bbydV9g84NQQleVyNK22W63Fax/suyoEgpbfDRVVOo4OkcbOfWMRwFHRGK3nK5woYmM2dznFjqPP9GFZkW+xVD3T1vPO8OgPoC2258YwW2/jTmdoIsImqkCWztAcWFsHllnkLCZ90mk4Ow735bN7cnHSJr1OyrvzGeN5W7JuLWXMbg+3l4oidNJ90G3fNwFBIS5KAkucpfU7lm8C6O+nyCOovHQXFPvDWZY24zhaOg1faG85eQkjZZbT7lFcbON9z2gbOg57sX4LmiAnmYeKAvl3uCgzcjJRUcAQFaD7p8ug6poJSrISDbAPuoClRIYVOzxD8X8svjtsYFnAPP8uRSVogoBkiYlAtyQVaoJLfJ+WGFaiBFqQOEVleyLbFxlRolSOk2mF7tQFJtecM5ygooRJDrptnm0LnTbdYe//3AQpOpZX9dQ1M+0mCDApSiet8jiD/pu03i6h52VVWk5PqafUB0RA991rVJY4DYu6sCqFxNvgPVLqOkA3gHGB7pvAR3vsoRoPfH+zKk5DNpuEuDLx0t3m5l4M68ZtsvQaQousS3FQuHHFILjpCFRw4yKBuWE4EYoUx3mUCEHdjuvi1t98VUdcmFVje7WDwnLEBGtuvRqXmml5i6N50cJVAIgg/63LLvSiKp9lEUq/gTth5eFEReJpZYUmXJYuSSxdc3tyGb7DvQoLdD99Nksl82s8jbVVdj5mQT2tOs/vxdClqf/WQ3yJags0L7Ac1aEERmDbdWR90QQprLHAy+PDTy+PD395eXz48eXx4W8vjw8/vDw+/PUPz0+/Pj/99vz0r+enfzw//fP56d/PT7+9/P2Xn2vGr+OsufiohDguQBcoRsvcbr1x2RqRw2G1kqaSZEhSLfS38b8t83VbOtVSXk93mujlrUpu7AvdXozl9gGO2wxlDCVr059U7GzfTw9fAqnttcd5EKEz4iJvyLm+haxJX+9M2IVu7QLGsPpHmzserZWt9OaKaR40Ndlku+lIMtfJKIqmvLFUE2ZGVzsyaXgm7m1WSnhbZ7vK8H0ybbpXVwxqTFdKUMqOEZpEFBwSHSfBSvG1PTfcKswSinfWnTX2Qtr3hFwx1X6yGRYnpxgmNnU21vJk1LNiRTs6+YRzcHi1mYvNxa+/F/zqAFfRBhhd3Pp1YP9r7J/Xh7pvvoN4tf+vSFRGw/iwcHab/dII+DAgvKK2I8n3tMjyRQUf1NXEcSuHP64FcF/7Qh7DMshIAroApj7JLqIiWVXvt54G2TeSKZKj914Lj2FRSp894ws2RDPXKJtk+R0sNqAL0oSR3XobTlKeT0tYvjkQkOqnt7PB/X8AbyNX4CIJAAA==';

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
