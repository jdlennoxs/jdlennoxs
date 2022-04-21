import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    // <SectionContainer>
    <div className="flex flex-col justify-between h-screen">
      <div className="w-screen border-b">
        <header className="flex items-center justify-between py-4 header-width ">
          <div className="inline-flex items-baseline justify-between">
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div>
                {/* <div className="mr-3">
                      <Logo />
                    </div> */}
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="text-gray-800 dark:text-gray-100 h-6 font-semibold tracking-wide">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="invisible sm:visible">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="leading-none text-gray-700 sm:p-4 dark:text-gray-100 hover:underline"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
      </div>

      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
    // </SectionContainer>
  )
}

export default LayoutWrapper
