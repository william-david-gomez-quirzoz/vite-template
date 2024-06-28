import { Roles } from 'core/enum/roles'

const roleHavePermissions = ({ roles }: { roles: Roles[] }) => {
  return roles.includes(Roles.ADMIN)
}

export { roleHavePermissions }
