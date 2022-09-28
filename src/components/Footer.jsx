function Footer() {
   return(
    <footer className="page-footer green lighten-4">

        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right"
                  href= 'https://github.com/vav67/08nepomnyasci-react'
                  target='_blank'
                  rel="noreferrer"
                  >Repozitori</a>
            </div>
        </div>
    </footer>
   )
}
export {Footer}