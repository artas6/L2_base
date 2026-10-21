function ipv4Parser(ip, mask) {
  const ipParts = ip.split('.').map(Number);
  const maskParts = mask.split('.').map(Number);
  
  const network = [];
  const host = [];

  for (let i = 0; i < 4; i++) {
    network.push(ipParts[i] & maskParts[i]);
    host.push(ipParts[i] & (~maskParts[i] & 255));
  }

  return [network.join('.'), host.join('.')];
}