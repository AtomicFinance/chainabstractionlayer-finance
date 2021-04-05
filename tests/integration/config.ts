import BitcoinNetworks from '@liquality/bitcoin-networks';
import * as TsBitcoinNetworks from '../../packages/bitcoin-networks/lib';

export default {
  bitcoin: {
    rpc: {
      host: 'http://localhost:18443',
      username: 'bitcoin',
      password: 'local321',
    },
    network: BitcoinNetworks.bitcoin_regtest,
    tsNetwork: TsBitcoinNetworks.default.bitcoin_regtest,
    value: 1000000,
    mineBlocks: true,
  },
  timeout: 240000, // No timeout
};
