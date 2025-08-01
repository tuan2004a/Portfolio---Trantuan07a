import Avatar from "./Avatar"
import HeroSection from "./HeroSection"

const Index = () => {
    return (
        <div className="uk-flex uk-flex-left items-center gap-10 size-full">
            <div className="uk-margin-large-right uk-margin-small-left">
                <Avatar/>
            </div>
            <div>
                <HeroSection/>
            </div>
        </div>
    )
}

export default Index
