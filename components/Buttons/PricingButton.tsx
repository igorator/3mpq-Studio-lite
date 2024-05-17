import { ScrollToTopLink } from '@components/ScrollToTopLink'
import { routes } from '@data/routes'

export const PricingButton: React.FC = () => {
    return (
        <ScrollToTopLink
            href={routes.contact}
            className='mt-[40px] flex w-full items-center justify-center bg-white py-[8px] font-primary text-[16px] leading-[170%] text-[#161616] transition-opacity duration-200 hover:opacity-60'
        >
            Order a site
        </ScrollToTopLink>
    )
}
