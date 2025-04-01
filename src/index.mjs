import app from './app.mjs'

app.listen(app.get('port'), () => {
  console.log('server listen in', app.get('port'))
})
