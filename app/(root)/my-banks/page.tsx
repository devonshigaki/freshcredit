import { redirect } from 'next/navigation';
import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const MyBanks = async () => {
  console.log('MyBanks page rendering');
  const loggedIn = await getLoggedInUser();
  console.log('Logged in user:', loggedIn);

  if (!loggedIn) {
    console.log('No logged in user, redirecting');
    redirect('/sign-in');
  }

  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  });
  console.log('Accounts:', accounts);

  return (
    <section className='flex'>
      <div className="my-banks">
        <HeaderBox 
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activities."
        />

        <div className="space-y-4">
          <h2 className="header-2">
            Your cards
          </h2>
          <div className="flex flex-wrap gap-6">
            {accounts && accounts.data && accounts.data.length > 0 ? (
              accounts.data.map((a: Account) => (
                <BankCard 
                  key={a.id}
                  account={a}
                  userName={loggedIn?.firstName}
                />
              ))
            ) : (
              <p>No bank accounts found. Please add a bank account.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBanks