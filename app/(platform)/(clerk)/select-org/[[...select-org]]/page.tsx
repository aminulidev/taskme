import { OrganizationList } from '@clerk/nextjs'

const CreteOrganizationPage = () => {
    return (
        <OrganizationList hidePersonal
            afterSelectOrganizationUrl="/organization/:id"
            afterCreateOrganizationUrl="/organization/:id"
        />
    )
}

export default CreteOrganizationPage