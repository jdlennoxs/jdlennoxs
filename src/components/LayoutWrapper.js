import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import Footer from './Footer'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="w-screen border-b bg-white">
        <header className="flex items-center justify-between py-4 header-width">
          <div className="inline-flex items-baseline justify-between">
            <Link href="/" aria-label="jdlennoxs">
              <div className="p-4">
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
            {/* <ThemeSwitch /> */}
            <MobileNav />
          </div>
        </header>
      </div>

      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
