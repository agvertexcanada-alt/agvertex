import { useState, useEffect } from 'react';
import { showcaseApi, ShowcaseProject } from '../lib/api/showcase';
import { servicesApi, Service } from '../lib/api/services';
import { careersApi, Career } from '../lib/api/careers';
import { settingsApi, AllSettings } from '../lib/api/settings';

export function useShowcaseVisibility() {
  const [enabled, setEnabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    showcaseApi.getVisibility().then(val => {
      if (mounted) {
        setEnabled(val);
        setLoading(false);
      }
    }).catch(() => {
      if (mounted) setLoading(false);
    });
    return () => { mounted = false; };
  }, []);

  return { enabled, loading };
}

export function useServicesData() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    servicesApi.getPublished().then(data => {
      if (mounted) {
        setServices(data);
        setLoading(false);
      }
    }).catch(() => {
      if (mounted) setLoading(false);
    });
    return () => { mounted = false; };
  }, []);

  return { services, loading };
}

export function useShowcaseData() {
  const [projects, setProjects] = useState<ShowcaseProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    showcaseApi.getPublished().then(data => {
      if (mounted) {
        setProjects(data);
        setLoading(false);
      }
    }).catch(() => {
      if (mounted) setLoading(false);
    });
    return () => { mounted = false; };
  }, []);

  return { projects, loading };
}

export function useCareersData() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    careersApi.getPublished().then(data => {
      if (mounted) {
        setCareers(data);
        setLoading(false);
      }
    }).catch(() => {
      if (mounted) setLoading(false);
    });
    return () => { mounted = false; };
  }, []);

  return { careers, loading };
}

export function useSettingsData() {
  const [settings, setSettings] = useState<AllSettings | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    settingsApi.getAllSettings().then(data => {
      if (mounted) {
        setSettings(data);
        setLoading(false);
      }
    }).catch(() => {
      if (mounted) setLoading(false);
    });
    return () => { mounted = false; };
  }, []);

  return { settings, loading };
}
