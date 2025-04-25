import requests

proxies = {
  'http': 'http://USERNAME:PASSWORD@unblock.decodo.com:60000',
  'https': 'http://USERNAME:PASSWORD@unblock.decodo.com:60000'
}

response = requests.request(
    'GET',
    'https://ip.decodo.com/',
    verify=False,
    proxies=proxies
)

print(response.text)

with open('result.html', 'w') as f:
    f.write(response.text)
