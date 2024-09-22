export const removeDuplicates = (ips: any) => {
  const mappedIp = ips.map((address: any) => {
    return address.ipAddress;
  });

  const duplicates = (err: any) => [...new Set(err)];

  return duplicates(mappedIp);
};
