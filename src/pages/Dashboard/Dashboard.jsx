import { Box, Flex } from "@chakra-ui/react";
import Sidenav from "../../components/Sidenav";
import TopNav from "../../components/TopNav";
import DashboardLayout from "../../components/DashboardLayout";
import { title } from "framer-motion/client";
import PortfolioSection from "./components/PortfolioSection";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <PortfolioSection />
    </DashboardLayout>
  );
};

export default Dashboard;
