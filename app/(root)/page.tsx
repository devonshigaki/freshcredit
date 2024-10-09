import { redirect } from 'next/navigation';
import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  console.log('Home page rendering');
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  console.log('Logged in user:', loggedIn);

  if (!loggedIn) {
    console.log('No logged in user, redirecting');
    redirect('/sign-in');
  }

  let accounts;
  try {
    accounts = await getAccounts({ 
      userId: loggedIn.$id 
    });
    console.log('Accounts:', accounts);
  } catch (error) {
    console.error('Error fetching accounts:', error);
    accounts = null;
  }

  if (!accounts || !accounts.data) {
    console.log('No accounts found');
    return (
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox 
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || 'Guest'}
              subtext="No accounts found. Please add a bank account."
            />
          </header>
        </div>
      </section>
    );
  }

  const accountsData = accounts.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>

        <RecentTransactions 
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
};

export default Home







// import { redirect } from 'next/navigation';
// import HeaderBox from '@/components/HeaderBox'
// import RecentTransactions from '@/components/RecentTransactions';
// import RightSidebar from '@/components/RightSidebar';
// import TotalBalanceBox from '@/components/TotalBalanceBox';
// import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
// import { getLoggedInUser } from '@/lib/actions/user.actions';

// const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
//   console.log('Home page rendering');
//   const currentPage = Number(page as string) || 1;
//   const loggedIn = await getLoggedInUser();
//   console.log('Logged in user:', loggedIn);

//   if (!loggedIn) {
//     console.log('No logged in user, redirecting');
//     redirect('/sign-in');
//   }

//   const accounts = await getAccounts({ 
//     userId: loggedIn.$id 
//   });
//   console.log('Accounts:', accounts);

//   if (!accounts || !accounts.data) {
//     console.log('No accounts found');
//     return (
//       <section className="home">
//         <div className="home-content">
//           <header className="home-header">
//             <HeaderBox 
//               type="greeting"
//               title="Welcome"
//               user={loggedIn?.firstName || 'Guest'}
//               subtext="No accounts found. Please add a bank account."
//             />
//           </header>
//         </div>
//       </section>
//     );
//   }

//   const accountsData = accounts.data;
//   const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

//   const account = await getAccount({ appwriteItemId });

//   return (
//     <section className="home">
//       <div className="home-content">
//         <header className="home-header">
//           <HeaderBox 
//             type="greeting"
//             title="Welcome"
//             user={loggedIn?.firstName || 'Guest'}
//             subtext="Access and manage your account and transactions efficiently."
//           />

//           <TotalBalanceBox 
//             accounts={accountsData}
//             totalBanks={accounts?.totalBanks}
//             totalCurrentBalance={accounts?.totalCurrentBalance}
//           />
//         </header>

//         <RecentTransactions 
//           accounts={accountsData}
//           transactions={account?.transactions}
//           appwriteItemId={appwriteItemId}
//           page={currentPage}
//         />
//       </div>

//       <RightSidebar 
//         user={loggedIn}
//         transactions={account?.transactions}
//         banks={accountsData?.slice(0, 2)}
//       />
//     </section>
//   );
// };

// export default Home