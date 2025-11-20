import Sidebar from './components/Sidebar'
import Header from './components/Header'
import TopRow from './components/TopRow'
import MiddleRow from './components/MiddleRow'
import BottomRow from './components/BottomRow'

function App() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#333]">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen">
          <Header />

          {/* Main content */}
          <main className="max-w-7xl mx-auto px-4 pb-10 pt-6 grid gap-6">
            <TopRow />
            <MiddleRow />
            <BottomRow />

            {/* Profile card on sidebar bottom for smaller screens */}
            <div className="grid md:hidden">
              <div className="bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex items-center gap-4">
                <img className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDJ8fGphcGFuZXNlJTIwd29tYW58ZW58MHx8fHwxNzAwMDAwMDAw&crop=faces" alt="Jasmine"/>
                <div>
                  <p className="font-medium">Jasmine</p>
                  <p className="text-sm text-[#888]">jasmine@example.com</p>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Desktop user profile footer in sidebar */}
        <div className="hidden"></div>
      </div>
    </div>
  )
}

export default App
