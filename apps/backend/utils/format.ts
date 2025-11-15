//format collumn to camelCase because in database it use snake_case
export function toCamelCase(row: any) {
  return {
    fullName: row.full_name,
    gender: row.gender,
  };
}
