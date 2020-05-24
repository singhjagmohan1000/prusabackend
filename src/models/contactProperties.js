const path = require("path");
const HOMEDIR = path.join(__dirname, "..", "..");
var nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const CONFIG = require(path.join(HOMEDIR, "config", "default"));

const smtpTransport = nodemailer.createTransport({
  host: CONFIG.CONTACT.SMPTP.HOST,
  port: CONFIG.CONTACT.SMPTP.PORT,
  secure: CONFIG.CONTACT.SMPTP.SECURE,
  auth: {
    type: "OAuth2",
    user: CONFIG.CONTACT.SMPTP.AUTH.USER,
    serviceClient: CONFIG.CONTACT.SMPTP.CLIENT.ID,
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDFa3y5UWQHhNYw\nZEw2/t1ObTv+WRxbmlH64I7XZrJejXeA0sX73Q1URTYVsAULJ6jeXpgC9qTDcU/I\n7JsdLy5X05v9LHrxW+3rf41VwLrSZUo1q48Rx5L6UCRM/9uFyR3groBGV2KlgEQu\nkMF7Diw8LFPMG237Xz32JjkqBQWe5Zo6CqdBHh2APiVJm0ZQdg6xtQNL6+nQLLeW\ndGXqx4WHoyFT2rLdOv20rjNG2ojq+jX8sWqi+sO5vkI6GUjZLsc7Apq3za3B28cU\n2KbRfJmvKT9EhiCytkdLzh9ZgraZS+lx+ng3+Nu3XeVCago9kgz9mMH/QvzRpxjj\nJBWX+xHxAgMBAAECggEAJR/FYIPxr4hHTupNeroKm8jm0zmmn4Mxj1/S/KaPPECW\nDF+WY3p6GzK4rPNgv2xB0S8wnr4K1cXlHv9/W8mXiWR9nOpUZDbJUtO1nD6V4yKx\nBc6xJMLG3NNdQC2M9mePesTV0mR0ZHLuX2NRPva3UslzKJqv3+lVGYiujzxKhkqK\nTi8irCvUR8OI0CVbPBt48rFDJp+GtDtLm76xE424wNfepYpcvKi48FR6IhDQ1Tk5\n1IaDOs9MOIY2NEVysQA6WnULt57blRi8WjtsPbqSS56OkGmZBcAhKeE2qHCbm0Sc\nLJ/5Bp5ym2JiAglRXBFmOW9Kt+5Hifc9osd4Io8qUQKBgQDpTHRy/e1YYdwlnnhb\n723MT6RA3zH4bO+K+Fuk11bLgYF4bIYI4edj1j+B5YAZ1DSicQKMSQPXbSlXGMi8\n2NbaOndyg2jITn7liT9ok6R3DuD49B8Ol47ZhOIA+U4WHkFDbI4K+st/0N1XXEgm\nKWtpZoK9kF0vS1cp341FRh3AGwKBgQDYoUe/3i8ukXdXQHyqXpEA3P4b6jg2RjL1\nIilwLs1ITb32ZbCDnVJSTn3Dm3R2xiG+ImarI/yX4i0VHz6e+mIoxWVjmaCSR1GM\n+zFplzDKq+WvRy0gk8bRXC9+T2/JMn/mY+TKKal4R3KQ9u44t/JpM8MXJQKQHbo2\nwwFbiUzO4wKBgFv0BYX5bd5DHAk7z8a0tTstPNlQ35pCHZxRzZVIRu6JSeWUKLRB\njfk8zeU99uK3UFOiZVWzxa7YWM36d8xvTyfOmZvqDZe90KhaE0L9xnoixCt71O3k\ncKpthMLLgKqZHDIeDFJpjWIAie1P8yQPeUWe4PMkfoYQlPdtJHpka393AoGACbOX\nWgFiTYyYMqEhtCOODOLYwnlH0S5to8rG3k5KRT2uDzXYpNxLzoHTYgo5OgR/iFtU\nC8AN1ON9L1/51vbRpI/KjZ5YsZReE5lASkFKHxl5rNLcM4RKuB+PxPFbyT/ouHGq\n0l7xRwC0IcfdPU8HnSyDRSsUJU4fg8pR6j6I4Q8CgYEAojn09wzeUoYosafqL0nR\nqMYsEPVGYwycX0SwKGfUN9Ovc41a/9GE2Tg+393Rsy/8ztIUqC1Ucfy5q46q9RSu\nr/O5EBw1tmu7hjM+aGxo7uv8pQCNYMbWiWcOI6soq6LOZt7KNBrs9upZazIe2Frd\nkXmH++BeIX8hQFN4b4nhAt0=\n-----END PRIVATE KEY-----\n"
  }
});
module.exports = smtpTransport;
