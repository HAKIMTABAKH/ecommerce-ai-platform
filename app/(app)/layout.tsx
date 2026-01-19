import { SanityLive } from "@/sanity/lib/live";
import { ClerkProvider } from "@clerk/nextjs";
import { CartStoreProvider } from "@/lib/store/cart-store-provider";
import { Header } from "@/components/app/Header";
import { AppShell } from "@/components/app/AppShell";
import { ChatStoreProvider } from "@/lib/store/chat-store-provider";
import { Toaster } from "@/components/ui/sonner";
import { CartSheet } from "@/components/app/CartSheet";
import { ChatSheet } from "@/components/app/ChatSheet";


function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <CartStoreProvider>
                <ChatStoreProvider>
                    <AppShell>
                        <Header />
                        <main>{children}</main>
                    </AppShell>
                    <CartSheet />
                    <Toaster position="bottom-center" />
                    <SanityLive />
                </ChatStoreProvider>

            </CartStoreProvider>
        </ClerkProvider>
    );
};
export default AppLayout;