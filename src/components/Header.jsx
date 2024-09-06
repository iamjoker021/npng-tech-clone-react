import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <header>
            <div className="brand-logo">
                <a href=""><img className="logo" src="https://npngtech.in/assets/large-DIFPjkXK.png" alt="npng-logo" /><h1 className="brand-name">NPNG Tech</h1></a>
            </div>
            <DesktopNav />
            <MobileNav />
            <button>Sign In</button>
        </header>
        
    )
}

export default Header