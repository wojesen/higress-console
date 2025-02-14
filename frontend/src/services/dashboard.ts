import { DashboardInfo } from '@/interfaces/dashboard';
import request from './request';

export const getDashboardInfo = (): Promise<DashboardInfo> => {
  return request.get<any, DashboardInfo>("/dashboard/info");
};

export const initDashboard = (): Promise<DashboardInfo> => {
  return request.get<any, DashboardInfo>("/dashboard/init");
}
