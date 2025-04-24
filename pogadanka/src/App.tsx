import "./App.css";
import ExpensiveMath from "./hooks/examples/useMemo/ExpensiveMath";
import FilteredList from "./hooks/examples/useMemo/FilteredList";
import SortedList from "./hooks/examples/useMemo/SortedList";
import PaginationSlice from "./hooks/examples/useMemo/PaginationSlice";
import FormValidation from "./hooks/examples/useMemo/FormValidation";
import ThemeStyleGenerator from "./hooks/examples/useMemo/ThemeStyleGenerator";
import PerformanceMetrics from "./hooks/examples/useMemo/PerformanceMetrics";
import UniqueCategories from "./hooks/examples/useMemo/UniqueCategories";
import DataTransformation from "./hooks/examples/useMemo/DataTransformation";
import PriceCalculations from "./hooks/examples/useMemo/PriceCalculations";
import InputHandlers from "./hooks/examples/useCallback/InputHandlers";
import ButtonActions from "./hooks/examples/useCallback/ButtonActions";
import ChildPropCallback from "./hooks/examples/useCallback/ChildPropCallback";
import FormSubmit from "./hooks/examples/useCallback/FormSubmit";
import RefCallback from "./hooks/examples/useCallback/RefCallback";
import SetTimeout from "./hooks/examples/useCallback/SetTimeout";
import KeyboardShortcuts from "./hooks/examples/useCallback/KeyboardShortcuts";
import CustomHookTriggers from "./hooks/examples/useCallback/CustomHookTriggers";
import NavigationHandlers from "./hooks/examples/useCallback/NavigationHandlers";
import UndoRedoHandler from "./hooks/examples/useCallback/UndoRedoHandler";
import FilteredListItemClick from "./hooks/examples/useMemo_useCallback/FilteredListItemClick";
import SortedListSortHandler from "./hooks/examples/useMemo_useCallback/SortedListSortHandler";
import CartTotalAddRemoveHandlers from "./hooks/examples/useMemo_useCallback/CartTotalAddRemoveHandlers";
import DynamicFiltersSubmit from "./hooks/examples/useMemo_useCallback/DynamicFiltersSubmit";
import FormStateHandler from "./hooks/examples/useMemo_useCallback/FormStateHandler";
import GraphDataEventBindings from "./hooks/examples/useMemo_useCallback/GraphDataEventBindings";
import SearchIndexLookupHandler from "./hooks/examples/useMemo_useCallback/SearchIndexLookupHandler";
import ThemePropsToggleHandler from "./hooks/examples/useMemo_useCallback/ThemePropsToggleHandler";
import UIConfigRenderHandler from "./hooks/examples/useMemo_useCallback/UIConfigRenderHandler";
import VisibleElementsActionHandler from "./hooks/examples/useMemo_useCallback/VisibleElementsActionHandler";
import { SectionWrapper } from "./components/SectionWrapper";

function App() {
  return (
    <>
      {/* <UseMemoUseCallbackExamples />
      <HookExamples />
      <HookUseCaseExamples /> */}
      <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>🔧 React Hook Examples</h1>

        {/* useMemo */}
        <h2>🧠 useMemo</h2>
        <SectionWrapper title="ExpensiveMath">
          <ExpensiveMath />
        </SectionWrapper>
        <SectionWrapper title="FilteredList">
          <FilteredList />
        </SectionWrapper>
        <SectionWrapper title="SortedList">
          <SortedList />
        </SectionWrapper>
        <SectionWrapper title="PaginationSlice">
          <PaginationSlice />
        </SectionWrapper>
        <SectionWrapper title="FormValidation">
          <FormValidation />
        </SectionWrapper>
        <SectionWrapper title="ThemeStyleGenerator">
          <ThemeStyleGenerator />
        </SectionWrapper>
        <SectionWrapper title="PerformanceMetrics">
          <PerformanceMetrics />
        </SectionWrapper>
        <SectionWrapper title="UniqueCategories">
          <UniqueCategories />
        </SectionWrapper>
        <SectionWrapper title="DataTransformation">
          <DataTransformation />
        </SectionWrapper>
        <SectionWrapper title="PriceCalculations">
          <PriceCalculations />
        </SectionWrapper>

        {/* useCallback */}
        <h2>🪝 useCallback</h2>
        <SectionWrapper title="InputHandlers">
          <InputHandlers />
        </SectionWrapper>
        <SectionWrapper title="ButtonActions">
          <ButtonActions />
        </SectionWrapper>
        <SectionWrapper title="ChildPropCallback">
          <ChildPropCallback />
        </SectionWrapper>
        <SectionWrapper title="FormSubmit">
          <FormSubmit />
        </SectionWrapper>
        <SectionWrapper title="RefCallback">
          <RefCallback />
        </SectionWrapper>
        <SectionWrapper title="SetTimeout">
          <SetTimeout />
        </SectionWrapper>
        <SectionWrapper title="KeyboardShortcuts">
          <KeyboardShortcuts />
        </SectionWrapper>
        <SectionWrapper title="CustomHookTriggers">
          <CustomHookTriggers />
        </SectionWrapper>
        <SectionWrapper title="NavigationHandlers">
          <NavigationHandlers />
        </SectionWrapper>
        <SectionWrapper title="UndoRedoHandler">
          <UndoRedoHandler />
        </SectionWrapper>

        {/* Combined */}
        <h2>🔄 useMemo + useCallback</h2>
        <SectionWrapper title="FilteredListItemClick">
          <FilteredListItemClick />
        </SectionWrapper>
        <SectionWrapper title="SortedListSortHandler">
          <SortedListSortHandler />
        </SectionWrapper>
        <SectionWrapper title="DynamicFiltersSubmit">
          <DynamicFiltersSubmit />
        </SectionWrapper>
        <SectionWrapper title="SearchIndexLookupHandler">
          <SearchIndexLookupHandler />
        </SectionWrapper>
        <SectionWrapper title="CartTotalAddRemoveHandlers">
          <CartTotalAddRemoveHandlers />
        </SectionWrapper>
        <SectionWrapper title="UIConfigRenderHandler">
          <UIConfigRenderHandler />
        </SectionWrapper>
        <SectionWrapper title="ThemePropsToggleHandler">
          <ThemePropsToggleHandler />
        </SectionWrapper>
        <SectionWrapper title="GraphDataEventBindings">
          <GraphDataEventBindings />
        </SectionWrapper>
        <SectionWrapper title="VisibleElementsActionHandler">
          <VisibleElementsActionHandler />
        </SectionWrapper>
        <SectionWrapper title="FormStateHandler">
          <FormStateHandler />
        </SectionWrapper>
      </div>
    </>
  );
}

export default App;
