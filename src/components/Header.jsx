import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <header>
            <div class="brand-logo">
                <a href=""><img class="logo" src="https://npngtech.in/assets/large-DIFPjkXK.png" alt="npng-logo" /><h1 class="brand-name">NPNG Tech</h1></a>
            </div>
            <DesktopNav />
            <MobileNav />
            <button>Sign In</button>
        </header>
        
    )
}

export default Header