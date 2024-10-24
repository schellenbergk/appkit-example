// App.tsx
import {createAppKit} from '@reown/appkit/react';
import {SolanaAdapter} from '@reown/appkit-adapter-solana/react';
import {solana, solanaTestnet, solanaDevnet} from '@reown/appkit/networks';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';

// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});

// 1. Get projectId from https://cloud.reown.com
const projectId = process.env.REOWN_PROJECT_ID || '';

// 2. Create a metadata object - optional
const metadata = {
  name: 'AppKitExample',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png'],
};

// 3. Create modal
createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  metadata: metadata,
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

export default function Home() {
  return (
    <div className="p-4">
      <h1>AppKit Example...</h1>
    </div>
  );
}
