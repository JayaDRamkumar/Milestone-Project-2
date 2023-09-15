const React = require('react')
const Def = require('./default')
function home () {
  return (
    <Def>
        
        <main>
            <h1>HOME</h1>
            <div>
                <img src="https://media.istockphoto.com/id/183306417/photo/film-reel.jpg?s=612x612&w=0&k=20&c=ncbrAgLU5fupgCpGp2mS-Exie1h7d-7Zn--vYGWo25I=" />
            </div>
            <a href="/movies">
  <button className="btn-primary">Movies Page</button>
</a>

        </main>
    </Def>
  )
}


module.exports = home
