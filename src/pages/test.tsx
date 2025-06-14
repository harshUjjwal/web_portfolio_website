import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorBoundary from '@/components/ErrorBoundary';
import { ErrorThrower, ContextTester, TestWrapper } from '@/components/TestErrorBoundary';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ChartContainer } from '@/components/ui/chart';
import { Sidebar, SidebarContent } from '@/components/ui/sidebar';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

export default function TestPage() {
  const form = useForm();

  return (
    <ErrorBoundary>
      <TestWrapper>
        <div className="space-y-8">
          {/* Test Error Boundary */}
          <section className="p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">Error Boundary Test</h2>
            <ErrorThrower />
          </section>

          {/* Test Context Usage */}
          <section className="p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">Context Usage Test</h2>
            <ContextTester />
          </section>

          {/* Test Form Context */}
          <section className="p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">Form Context Test</h2>
            <Form {...form}>
              <form>
                <FormField
                  control={form.control}
                  name="test"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Test Field</FormLabel>
                      <FormControl>
                        <input type="text" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </section>

          {/* Test ToggleGroup Context */}
          <section className="p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">ToggleGroup Context Test</h2>
            <ToggleGroup type="single">
              <ToggleGroupItem value="a">Option A</ToggleGroupItem>
              <ToggleGroupItem value="b">Option B</ToggleGroupItem>
            </ToggleGroup>
          </section>

          {/* Test Chart Context */}
          <section className="p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">Chart Context Test</h2>
            <ChartContainer config={{}}>
              <div>Chart Content</div>
            </ChartContainer>
          </section>

          {/* Test Sidebar Context */}
          <section className="p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">Sidebar Context Test</h2>
            <Sidebar>
              <SidebarContent>Sidebar Content</SidebarContent>
            </Sidebar>
          </section>

          {/* Test Carousel Context */}
          <section className="p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">Carousel Context Test</h2>
            <Carousel>
              <CarouselContent>
                <CarouselItem>Slide 1</CarouselItem>
                <CarouselItem>Slide 2</CarouselItem>
              </CarouselContent>
            </Carousel>
          </section>
        </div>
      </TestWrapper>
    </ErrorBoundary>
  );
} 